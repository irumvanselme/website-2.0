import {forwardRef} from 'react'
import clsx from 'clsx'
import Lottie from 'react-lottie'

import LoadingWaveLight from '@/styles/lottie-files/loading-wave-light.json'
import LoadingWavePurple from '@/styles/lottie-files/loading-wave-purple.json'
import type {ButtonProps} from './utils'
import {
    buttonBlockStyles,
    buttonSizes,
    buttonVariant,
    disabledStyles,
    loadingIconSizes,
    renderButtonIcon
} from './utils'

/**
 * Button component used for primary, secondary, subtle, and tertiary actions.
 *
 * @link https://tailwindui.com/components/application-ui/elements/buttons#component-80fd0d5ac7982f1a83b171bb0fb9e116
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            style,
            type,
            block,
            size = 'md',
            variant = 'primary',
            icon,
            iconPosition = 'left',
            isLoading,
            disabled,
            children,
            ...rest
        },
        ref
    ) => (
        <button
            className={clsx(
                buttonBlockStyles(block, iconPosition),
                buttonSizes(size),
                buttonVariant(variant),
                isLoading ? '!py-0' : '',
                'items-center justify-center rounded-full border-2 font-medium focus:outline-none',
                disabledStyles,
                className
            )}
            disabled={isLoading ?? disabled}
            ref={ref}
            style={style}
            type={type ?? 'button'}
            {...rest}
        >
            {!isLoading &&
                renderButtonIcon({
                    icon,
                    size,
                    iconPosition
                })}
            {isLoading ? (
                <Lottie
                    height="auto"
                    options={{
                        autoplay: true,
                        animationData:
                            variant === 'primary'
                                ? LoadingWaveLight
                                : LoadingWavePurple,
                        loop: true,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                        }
                    }}
                    width={loadingIconSizes(size)}
                />
            ) : (
                children
            )}
        </button>
    )
)

Button.displayName = 'Button'
export default Button
