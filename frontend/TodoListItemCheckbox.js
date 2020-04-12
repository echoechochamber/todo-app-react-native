import React from "react";
import * as spp from "svg-path-properties";
import { Animated, View } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

export default function TodoListItemCheckBox(props) {
  const pathLength = spp.svgPathProperties(props.path).getTotalLength() + 1; // calc path length directly from path
  const strokeOffsetAnim = React.useRef(new Animated.Value(pathLength)).current;
  const AnimatedPath = Animated.createAnimatedComponent(Path);

  // update the animation of the check mark, only when the value changes
  React.useEffect(() => {
    if (props.checked) {
      // animate the check appearance
      Animated.timing(strokeOffsetAnim, {
        toValue: 0,
        duration: 300
      }).start();
    } else {
      // hide the checkmark
      Animated.timing(strokeOffsetAnim, {
        toValue: Math.round(pathLength),
        duration: 1
      }).start();
    }
  }, [props.checked]);
  // NOTE: getting a little funky with the animated path positioning, could be avoided with better starting svg from illustrator
  return (
    <View>
      <Animated.View>
        <Svg
          height={props.dimensions}
          width={props.dimensions}
          viewBox="0 0 50 50"
        >
          <Circle
            cx="25"
            cy="25"
            r="10"
            stroke="rgba(0,0,0,.3)"
            strokeWidth="2"
          />
          <AnimatedPath
            scale="0.5"
            x="12"
            y="2"
            stroke={props.color}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            strokeWidth={"5"}
            strokeDasharray={Math.round(pathLength)}
            strokeDashoffset={strokeOffsetAnim}
            fill={"none"}
            d={props.path}
          />
        </Svg>
      </Animated.View>
    </View>
  );
}
