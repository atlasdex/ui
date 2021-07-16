import FooterLinks from "config/constants/footerLink";
import styled from "styled-components";
import Link from "./../Link/";
import Image from "./../Image/";
import Text from "./../Text/";

import FoorterLine from "assets/images/footer-line.svg";
import useTheme from "hooks/useTheme";
import Div from "components/DivComponent";
import ToggleSwitch from "components/ToggleSwitch";

const MainFooterSection = styled.div`
${({ theme }) => theme.mediaQueries.maxWidthMD} {
    a {
     display : block;
    }
  }
`;
const LineDiv = styled.div`
  &.footer-copy-rights {
    opacity : ${(props) => props.theme.isDark ? 0.3 : 1};
  }
`;

const Footer: React.FC = () => {
  const { theme , toggleTheme, isDark} = useTheme();
  const { colors, fonts } = theme;

  return (
    <>
      <MainFooterSection className={`text-center`}>
        {(FooterLinks).map((data, index) => (
          <Link classes={'isDisabled'} href={data.link} text={data.name} key={index} />
        ))}
      </MainFooterSection>
      <LineDiv className={`py-2`}>
        <Image src={FoorterLine} />
      </LineDiv>

      <LineDiv className={`text-center footer-copy-rights pb-5`}>
        <Text text={'© 2021 Atlas, All Rights Reserved.'} color={colors.white} size={fonts.fontSize13} />
      </LineDiv>

      <Div classes = {"d-flex justify-content-center align-items-center pb-5"}>
        <Text text ={isDark ? "Light Mode " : "Dark Mode "} size ={fonts.fontSize14} weight ={500} color = {colors.white} classes = {"mr-2"}/>
        <ToggleSwitch onClick = {toggleTheme} value = {isDark}/>
      </Div>
    </>
  );
};

export default Footer