export type InputTextSizes = 'lg' | 'md' | 'sm'
export type IconPosition = 'left' | 'right'

export interface InputBaseProps {
    /** The icon component to use in the input text. `icon={PlusIcon}` */
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    /** Renders the loading state of input text. */
    isLoading?: boolean
    /** The size of the input text. Available sizes: `"sm" | "md" | "lg"` */
    inputSize?: InputTextSizes
    disabled?: boolean
}

export type InputTextProps = InputBaseProps &
    React.InputHTMLAttributes<HTMLInputElement>
