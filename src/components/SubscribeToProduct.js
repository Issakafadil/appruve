import  React from "react";
import { Row, Col, Button } from "reactstrap";
import { withToastManager } from "react-toast-notifications";
import StripeCheckout from "react-stripe-checkout";
import ErrorMessage from "./ErrorMessage";
import useErrorHandler from "./ErrorHandler";

/** Styling */
import {
  CurrencySymbol,
  SubscriptionPlansWrapper,
  SubscriptionPlanCard,
  SubscriptionPlanCardHeading,
  SubscriptionPlanCardPrice,
  SubscriptionPlanCardSubHeading
} from "./Styles";

/** Utils */
import {
  PRODUCT_PLANS,
  Product,
  STRIPE_PUBLISHABLE_KEY
} from "../Utils/Model";
import { apiRequest } from "../Utils/Api";

const StripeToken=() => {
  card: {};
  client_ip: string;
  created: number;
  email: string;
  id: string;
  object: string;
  type: string;
  used: boolean;
  livemode: boolean;
};

const ToastNotificationType =()=> {
  add(message= message, {})
};

const SubscribeToProduct = ({ toastManager }) => {
  const { error, showError } = useErrorHandler(null);

  /**
   * Make request to AWS lambda function that handles creating
   * a customer and a subscription plan on stripe
   * @param token - token with stripe key and details entered in stripe form
   * @param productPlan - id of the product plan the user is subscribing to
   */
  const subscribeToProduct= () => async (
  ) => {
    const bodyParams = {
      stripeToken: token.id,
      email: token.email,
      productPlan
    };

    const response = await apiRequest(
      "http://localhost:3000/create-customer",
      "POST",
      bodyParams
    ).catch(e => {
      showError(e.message);
    });

    toastNotification("Subscription successful");
  };

  /**
   * List product plans
   * @param productPlans - array of product plans created in Stripe account that a user can subscribe to
   */
  const displayProductPlans = (productPlans => {
    if (productPlans && productPlans.length) {
      return productPlans.map(( Product,  number) => {
        return (
          <Col xs={12} md={4} lg={4} key={i}>
            <SubscriptionPlanCard>
              <SubscriptionPlanCardHeading>
                {product.name}
              </SubscriptionPlanCardHeading>
              <SubscriptionPlanCardPrice>
                <CurrencySymbol>$</CurrencySymbol>&nbsp;{product.price}
              </SubscriptionPlanCardPrice>
              <SubscriptionPlanCardSubHeading>
                billed monthly
              </SubscriptionPlanCardSubHeading>
              <SubscriptionPlanCardSubHeading>
                {product.description}
              </SubscriptionPlanCardSubHeading>
              <SubscriptionPlanCardSubHeading style={{ borderBottom: "none" }}>
                {product.users}
              </SubscriptionPlanCardSubHeading>
              <br />
              <br />
              <StripeCheckout
                name="My Store"
                description={`${product.name} Package`}
                token={token => subscribeToProduct(token, product.id)}
                billingAddress={true}
                zipCode={true}
                panelLabel="Subscribe"
                stripeKey={STRIPE_PUBLISHABLE_KEY}
              >
                <Button block={true}>Select This Plan</Button>
              </StripeCheckout>
            </SubscriptionPlanCard>
          </Col>
        );
      });
    }
    return "No existing product plans";
  })

  /**
   * Toast notification
   * @param message - notification message to be displayed
   */
  const toastNotification = (message) => {
    toastManager.add(message, {
      appearance: "success",
      autoDismiss: true
    });
  };

  return (
    <SubscriptionPlansWrapper>
      <Row>{displayProductPlans(PRODUCT_PLANS)}</Row>
      {error && <ErrorMessage errorMessage={error} />}
    </SubscriptionPlansWrapper>
  );
};

export default withToastManager(SubscribeToProduct);
