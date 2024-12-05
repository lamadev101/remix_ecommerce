import SecureLS from "secure-ls";

let ls: SecureLS | undefined;

export const isMobile = (): boolean => {
  if (typeof window !== "undefined") {
    return !!window.matchMedia("(max-width: 767px)").matches;
  }
  return false; // Default value for server-side rendering
};

if (typeof window !== "undefined") {
  ls = new SecureLS();
}

// Set in localStorage
export const setLocalStorage = (key: string, value: any): void => {
  if (typeof window !== "undefined" && ls) {
    ls.set(key, value);
  }
};

// Get from localStorage
export const getLocalStorage = (key: string): any | null => {
  try {
    if (ls) {
      return ls.get(key);
    }
    return null;
  } catch (error) {
    console.error(`Error getting key "${key}" from local storage:`, error);
    return null;
  }
};

// Remove from localStorage
export const removeLocalStorage = (key: string): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// Authenticate admin by passing data to cookie and localStorage
export const authenticateAdmin = (
  response: { data: { adminFirstName: string; adminLastName: string } },
  next: () => void
): void => {
  setLocalStorage("adminProfilefirstName", response.data.adminFirstName);
  setLocalStorage("adminProfilelastName", response.data.adminLastName);
  next();
};



// Convert number to string with fixed decimal places
export function toStringAsFixed(value: number): string {
  return value.toFixed(2);
}

// export const getBase64 = async (url: string) => {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error("Network response was not ok!!")
//     }
//     const buffer = await res.arrayBuffer();
//     const { base64 } = await getPlaiceholder(Buffer.from(buffer))
//     return base64;
//   } catch (error) {
//     console.log(error)
//   }
// }
