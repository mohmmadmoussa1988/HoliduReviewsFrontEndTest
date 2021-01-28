import styled from "styled-components";

export const ReviewContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ReviewRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const ReviewTitle = styled.div`
  font-family: "SF-bold";
  color: #173753;
  font-size: 16px;
  margin: 19px 0px 21px 0px;
`;

export const ReviewBody = styled.div`
  font-family: "SF-regular";
  color: #173753;
  font-size: 16px;
`;

export const Writername = styled.div`
  font-family: "SF-bold";
  color: #173753;
  font-size: 14px;
  margin-bottom: 6px;
  margin-left: 3px;
  margin-top: 17px;
`;

export const ReviewDate = styled.div`
  font-family: "SF-regular";
  font-size: 14px;
  margin-left: 3px;
  color: #5b7186;
`;

export const ReviewSeparator = styled.hr`
  width: 100%;
  border-top: 1px solid #e1e4e7;
  margin-top: 26px;
  margin-bottom: 29px;
`;
