import usePortfolioListHeaderQuery from "@api/portfolio/queries/usePortfolioListHeaderQuery";
import { useDropdown } from "@components/hooks/useDropdown";
import designSystem from "@styles/designSystem";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  portfolioDropdownItems:
    | {
        name: string;
        onClick: () => void;
      }[]
    | undefined;
  onPortfolioAddClick: () => void;
};

export function PortfoliosDropdown({
  portfolioDropdownItems,
  onPortfolioAddClick,
}: Props) {
  const navigate = useNavigate();
  const { DropdownMenu, DropdownItem, onOpen } = useDropdown();

  const { refetch: refetchPortfolioList } = usePortfolioListHeaderQuery();

  const onDropdownClick = (e: MouseEvent<HTMLButtonElement>) => {
    refetchPortfolioList();
    onOpen(e);
  };

  return (
    <>
      <button style={buttonStyle} onClick={onDropdownClick}>
        Portfolios
      </button>
      <DropdownMenu>
        {portfolioDropdownItems?.map((item) => (
          <DropdownItem key={item.name} item={item} />
        ))}

        <DropdownItem
          item={{
            name: "포트폴리오로 이동",
            onClick: () => navigate("/portfolios"),
          }}
        />
        <DropdownItem
          item={{
            name: "포트폴리오 추가",
            onClick: onPortfolioAddClick,
          }}
        />
      </DropdownMenu>
    </>
  );
}

const buttonStyle = {
  width: "80px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  font: designSystem.font.title4,
  letterSpacing: "-0.02em",
  cursor: "pointer",
};
