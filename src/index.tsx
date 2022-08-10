import * as React from 'react';
import './index.css';
interface Props {
  badgeText?:  JSX.Element,
  badgeOffsetX?: string,
  badgeOffsetY?: string,
  badgeBackground?: string,
  badgeColor?: string,
  badgeBorderRadius?: string,
  badgeWidth?: string,
  //
  btnText?:  JSX.Element,
  btnColor?: string,
  btnHoverColor?: string,
  btnBackground?: string,
  btnHoverBackground?: string,
  btnFontSize?: string,
  btnBorderRadius?: string,
  //
  callBack?: (event:any)=>{}
}
type State = {
  hover: boolean;
}

class BadgesReactjs extends React.Component<Props,State> {
  state: State ={
    hover : false
  }
  render() {
    const { btnText,btnColor,btnBackground,btnHoverColor,btnHoverBackground,btnFontSize,btnBorderRadius } = this.props;
    const { badgeText,badgeBackground,badgeColor,badgeBorderRadius,badgeOffsetY,badgeOffsetX,badgeWidth } = this.props;
    const {callBack} = this.props;
    let getHoverBackground = ()=>{
      return btnHoverBackground?btnHoverBackground: '#0d6efd';
    }
    let getHoverTextColor = ()=>{
      return btnHoverColor? btnHoverColor: '#ffff';
    }
    return(
      <button type="button" className={`btn position-relative`} style={{
          color: this.state.hover? getHoverTextColor():btnColor?btnColor : "#fff",
          background:  this.state.hover?getHoverBackground():btnBackground?btnBackground:'#198754',
          fontSize: btnFontSize?btnFontSize+'rem':'1rem',
          borderRadius: btnBorderRadius?btnBorderRadius+'%':'3%'
        }}
        onClick={(event:any)=>{callBack&&callBack(event)}}
        onMouseEnter={()=>{
          this.setState({hover:true});
        }}
        onMouseLeave={()=>{
          this.setState({hover:false});
        }}
      >
        { btnText }
        <span className="badges"
          style={{
            background: this.state.hover?btnBackground?btnBackground:'#198754': badgeBackground? badgeBackground: '#0d6efd',
            color: this.state.hover?btnColor?btnColor:"#fff":badgeColor?badgeColor:'#fff',
            borderRadius: badgeBorderRadius?badgeBorderRadius+'%': '10%',
            top: badgeOffsetY?badgeOffsetY+'rem':'-1rem',
            right: badgeOffsetX?badgeOffsetX+'rem':'-0.5rem',
            width: badgeWidth?badgeWidth+'rem':'1rem',
            height: badgeWidth?badgeWidth+'rem':'1rem'

          }}
        >
          { badgeText }
        </span>
      </button>
      
    );
  }
}
export default BadgesReactjs;