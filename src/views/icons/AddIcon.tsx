import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type AddIconPropsType = {
  width?: number;
  height?: number;
  fill?: string;
};
const AddIcon: React.FC<AddIconPropsType> = ({
  width = 16,
  height = 16,
  fill = '#72A8BC',
}) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1a1 1 0 1 0-2 0v6H1a1 1 0 0 0 0 2h6v6a1 1 0 1 0 2 0V9h6a1 1 0 1 0 0-2H9V1Z"
      fill={fill}
    />
  </Svg>
);

export default AddIcon;
