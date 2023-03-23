import { TAdmin } from "@entities/admin/types";
import { mainUrl } from "@shared/index";

export const getPermission = async (adminInfo: TAdmin): Promise<boolean> => {
  try {
    const response = await fetch(`${mainUrl}/admin`, {
      body: JSON.stringify(adminInfo),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch {
    throw new Error("Неверные учетные данные!");
  }
};
