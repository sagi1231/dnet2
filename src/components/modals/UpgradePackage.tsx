import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import styled from "styled-components";
import PackageCard from "../packages/PackageCard";

const DialogTitle = styled.h1`
  color: var(--main-title-color, #0a2540);
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 4rem */
  letter-spacing: -0.18rem;
  text-align: center;
`;

const DialogSubtitle = styled.h2`
  color: var(--main-text-color, #425466);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 1.125rem */
  letter-spacing: -0.03375rem;
  margin-top: 30px;
  text-align: center;
`;

const PeriodSwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const SwitcherText = styled.div`
  color: var(--main-text-color, #425466);
  font-size: 0.96713rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.029rem;
  text-transform: capitalize;

  & span {
    color: var(--main-adder-pink, #f92b75);
    font-weight: 700;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

const UpgradePackage: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <Dialog
      visible={visible}
      style={{ width: "75vw" }}
      onHide={() => setVisible(false)}
      draggable={false}
      closable={false}
    >
      <div>
        <DialogTitle>Upgrade your plan</DialogTitle>
        <DialogSubtitle>
          Discover the Perfect Plan for Your Content Strategy
        </DialogSubtitle>
      </div>
      <PeriodSwitcherWrapper>
        <SwitcherText>
          <span>Save 20% </span>
          with annual
        </SwitcherText>
      </PeriodSwitcherWrapper>
      <CardsWrapper>
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </CardsWrapper>
    </Dialog>
  );
};

export default UpgradePackage;
