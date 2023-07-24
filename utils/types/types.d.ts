type UploadFormState = {
  image: any;
  name: string;
  price: number | null;
  weight: number | null;
  tags: string;
};

type Product = {
  _id: any;
  name: string;
  price: number;
  weight: number;
  tags: Array;
  imageUrl: string;
};

type ModalProps = {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  children?: React.ReactNode;
};

type ImageSliderProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  visibleEl: number;
};

type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  city?: string;
  state?: string;
  phone?: string;
  emailVeridied: boolean;
  accessToken: string;
};

type LoginUserParams = {
  email: string;
  password: string;
};
