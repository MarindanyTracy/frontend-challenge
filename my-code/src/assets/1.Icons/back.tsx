import { IconProps } from "../../interfaces/icon";

export default function Back(props: IconProps) {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>icon-arrow-grey</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Styleguide-presentation" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="8.icons" transform="translate(-794.000000, -344.000000)">
                    <g id="icon__arrow" transform="translate(794.000000, 344.000000)">
                        <rect id="Rectangle-13" x="0" y="0" width="24" height="24"></rect>
                        <polyline id="Rectangle-3" stroke={props.fill} strokeWidth="2" transform="translate(9.000000, 12.000000) rotate(-45.000000) translate(-9.000000, -12.000000) " points="4 17 4 7 4 7 14 7"></polyline>
                        <path d="M3,12 L23,12" id="Line" stroke={props.fill} strokeWidth="2" strokeLinecap="square"></path>
                    </g>
                </g>
            </g>
        </svg>
    )
}