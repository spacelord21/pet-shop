import { DEFAULT_ALERT_TIMEOUT, createAlert } from "@entities/alert";
import { createOrder, createOrderFx, selectors } from "@entities/order/model";
import { TContactDetails } from "@entities/order/types";
import { useStore } from "effector-react";
import { useMemo } from "react";

export const useMakeOrder = () => {
  const { communicationPlace, name, phoneNumber } = selectors();
  const loading = useStore(createOrderFx.pending);

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (phoneNumber.length !== 12) {
      createAlert({
        message:
          "Неверно указан номер, форма - 89111111111. Пожалуйста, повторите.",
        timeout: DEFAULT_ALERT_TIMEOUT,
        type: "WARNING",
      });
      return;
    }
    const result: TContactDetails = {
      communicationPlace: communicationPlace,
      name: name,
      phone: phoneNumber,
    };
    createOrder(result);
  };

  const isButtonDisabled = useMemo(() => {
    return (
      communicationPlace.length === 0 ||
      name.length <= 1 ||
      phoneNumber.length <= 3 ||
      loading
    );
  }, [communicationPlace, name, phoneNumber, loading]);

  return { onClickHandler, loading, isButtonDisabled };
};
