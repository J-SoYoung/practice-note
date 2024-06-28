// svg파일 사용을 위한 설정파일
// svg 파일은 그냥 사용하면 자바스크립트 모듈처럼 사용이 불가능하기에 
// import 방식으로 사용을 위해 설정해주었습니다.

declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: REact.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
