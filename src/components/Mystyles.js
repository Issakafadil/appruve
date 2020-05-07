import styled from "styled-components";

/** Theme */
// import { Mycolor } from './theme/Mycolor';

const Mycolor = {
  aqua: "#33cccc",
  grey: "#666",
  lightGrey: "#ccc",
  red: "#cc0000"
};

export const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  margin: 20px;
  flex-direction: column;
`;

export const SubscriptionPlansWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const SubscriptionPlanCard = styled.div`
  margin: auto;
  padding: 10px;
  border-radius: 8px;
  border-top: 5px solid ${Mycolor.aqua};
  height: auto;
  box-shadow: 0 2px 2px 0 rgba(14, 30, 37, 0.32);
`;

export const SubscriptionPlanCardHeading = styled.h2`
  text-align: center;
  font-size: 1.65em;
  color: ${Mycolor.aqua};
  padding: 7px;
  text-transform: capitalize;
`;

export const SubscriptionPlanCardPrice = styled.h2`
  color: ${Mycolor.aqua};
  text-align: center;
  font-size: 2.95em;
`;

export const CurrencySymbol = styled.span`
  color: ${Mycolor.grey};
  font-size: 0.5em;
`;

export const SubscriptionPlanCardSubHeading = styled.p`
  color: ${Mycolor.aqua};
  font-weight: 100;
  text-align: center;
  border-bottom: 1px dotted ${Mycolor.lightGrey};
  padding-bottom: 10px;
`;