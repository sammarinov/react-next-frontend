declare namespace IButton {
  export interface IProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    disabled?: boolean;
    inverted?: boolean;
    sharp?: boolean;
    curved?: boolean;
    bgColor?: string;
    textColor?: string;
    columns?: string;
    padless?: boolean;
    uppercase?: boolean;
    leftAligned?: boolean;
  }
}

export { IButton };
