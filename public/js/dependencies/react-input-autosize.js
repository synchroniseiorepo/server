!function(b){if("object"==typeof exports&&"undefined"!=typeof module){module.exports=b()}else{if("function"==typeof define&&define.amd){define([],b)}else{var a;a="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,a.AutosizeInput=b()}}}(function(){return function a(c,b,g){function f(j,m){if(!b[j]){if(!c[j]){var h="function"==typeof require&&require;if(!m&&h){return h(j,!0)}if(d){return d(j,!0)}var i=new Error("Cannot find module '"+j+"'");throw i.code="MODULE_NOT_FOUND",i}var k=b[j]={exports:{}};c[j][0].call(k.exports,function(n){var l=c[j][1][n];return f(l?l:n)},k,k.exports,a,c,b,g)}return b[j].exports}for(var d="function"==typeof require&&require,e=0;e<g.length;e++){f(g[e])}return f}({1:[function(d,c,b){(function(j){var f=Object.assign||function(p){for(var o=1;o<arguments.length;o++){var m=arguments[o];for(var q in m){Object.prototype.hasOwnProperty.call(m,q)&&(p[q]=m[q])}}return p},l="undefined"!=typeof window?window.React:"undefined"!=typeof j?j.React:null,k={position:"absolute",visibility:"hidden",height:0,width:0,overflow:"scroll",whiteSpace:"nowrap"},g="undefined"!=typeof window?function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(i){window.setTimeout(i,1000/60)}}():void 0,h=l.createClass({displayName:"AutosizeInput",propTypes:{value:l.PropTypes.any,defaultValue:l.PropTypes.any,onChange:l.PropTypes.func,style:l.PropTypes.object,className:l.PropTypes.string,minWidth:l.PropTypes.oneOfType([l.PropTypes.number,l.PropTypes.string]),inputStyle:l.PropTypes.object,inputClassName:l.PropTypes.string},getDefaultProps:function(){return{minWidth:1}},getInitialState:function(){return{inputWidth:this.props.minWidth}},componentDidMount:function(){this.copyInputStyles(),this.updateInputWidth()},componentDidUpdate:function(){this.queueUpdateInputWidth()},copyInputStyles:function(){if(this.isMounted()&&window.getComputedStyle){var o=window.getComputedStyle(this.refs.input),n=this.refs.sizer;if(n.style.fontSize=o.fontSize,n.style.fontFamily=o.fontFamily,n.style.fontWeight=o.fontWeight,n.style.fontStyle=o.fontStyle,n.style.letterSpacing=o.letterSpacing,this.props.placeholder){var m=this.refs.placeholderSizer;m.style.fontSize=o.fontSize,m.style.fontFamily=o.fontFamily,m.style.fontWeight=o.fontWeight,m.style.fontStyle=o.fontStyle,m.style.letterSpacing=o.letterSpacing}}},queueUpdateInputWidth:function(){g(this.updateInputWidth)},updateInputWidth:function(){if(this.isMounted()&&"undefined"!=typeof this.refs.sizer.scrollWidth){var i=void 0;i=this.props.placeholder?Math.max(this.refs.sizer.scrollWidth,this.refs.placeholderSizer.scrollWidth)+2:this.refs.sizer.scrollWidth+2,i<this.props.minWidth&&(i=this.props.minWidth),i!==this.state.inputWidth&&this.setState({inputWidth:i})}},getInput:function(){return this.refs.input},focus:function(){this.refs.input.focus()},select:function(){this.refs.input.select()},render:function(){var o=(this.props.value||"").replace(/\&/g,"&amp;").replace(/ /g,"&nbsp;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;"),i=this.props.style||{};i.display||(i.display="inline-block");var m=f({},this.props.inputStyle);m.width=this.state.inputWidth,m.boxSizing="content-box";var n=this.props.placeholder?l.createElement("div",{ref:"placeholderSizer",style:k},this.props.placeholder):null;return l.createElement("div",{className:this.props.className,style:i},l.createElement("input",f({},this.props,{ref:"input",className:this.props.inputClassName,style:m})),l.createElement("div",{ref:"sizer",style:k,dangerouslySetInnerHTML:{__html:o}}),n)}});c.exports=h}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});