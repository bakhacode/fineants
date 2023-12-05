import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";
import designSystem from "@styles/designSystem";
import { ReactElement } from "react";
import styled from "styled-components";

type Props = TooltipProps & { children: ReactElement; smallPadding?: boolean };

export function CustomTooltip({ children, smallPadding, ...props }: Props) {
  return (
    <CustomStyledTooltip $smallPadding={smallPadding} {...props}>
      {children}
    </CustomStyledTooltip>
  );
}

const CustomStyledTooltip = styled(
  ({ className, ...props }: TooltipProps & { $smallPadding?: boolean }) => (
    <Tooltip
      {...props}
      PopperProps={{
        className,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: props.arrow ? [-7, -5] : [-7, -10],
            },
          },
        ],
      }}
    />
  )
)`
  & .${tooltipClasses.tooltip} {
    padding: ${({ $smallPadding }) => ($smallPadding ? "4px" : "8px")};
    border-radius: 4px;
    border: 1px solid ${designSystem.color.primary.blue100};
    background: ${designSystem.color.neutral.white};
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
    color: ${designSystem.color.neutral.gray800};
    font: ${designSystem.font.body4};
  }

  & .${tooltipClasses.arrow} {
    color: ${designSystem.color.neutral.white};
    transform: translate(5px, 0px) !important;
    &::before {
      border: 1px solid ${designSystem.color.primary.blue100};
    }
  }
`;
