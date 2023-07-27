import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import {Section} from '../component/Section';
import {colors} from '../utils/colors';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import {Button} from '../component/common/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {LayoutPage} from '../component/LayoutPage';

type CarouselData = {
  imageUrl: ImageSourcePropType;
  title: string;
  description: string;
};

const carouselData: CarouselData[] = [
  {
    imageUrl: require('../assets/image/homeslide-1.png'),
    title: 'Cuan Gak Pake Modal?',
    description: 'Bisa dong, yuk gabung gratis Jadi sahabat Bang Jamin',
  },
  {
    imageUrl: require('../assets/image/homeslide-2.png'),
    title: 'Banyak Sahabat Banyak Rejeki',
    description: 'Cari cuan makin kenceng dan seru bareng sahabat Bang Jamin',
  },
  {
    imageUrl: require('../assets/image/homeslide-3.png'),
    title: 'Gampang Urus Klaim',
    description: 'Urus klaim cepet gak pake ribet',
  },
];

export const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'home'>) => {
  const flatListRef = useRef<FlatList<CarouselData>>(null);
  const itemWidth = Dimensions.get('screen').width;
  let offset = 0;

  const handleAutoScroll = (): NodeJS.Timeout => {
    const intervalId = setInterval(() => {
      flatListRef.current?.scrollToOffset({animated: true, offset: offset});

      if (offset >= (carouselData.length - 1) * itemWidth) {
        offset = 0; // Reset offset to the start when reach the end
      } else {
        offset += itemWidth;
      }
    }, 3000);

    return intervalId;
  };
  const backgroundStyle = {
    backgroundColor: colors.orange.primary,
  };

  useEffect(() => {
    handleAutoScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <LayoutPage style={backgroundStyle}>
      <View style={{...backgroundStyle, ...styles.container}}>
        <View>
          <FlatList
            ref={flatListRef}
            horizontal
            decelerationRate="fast" // Add this line for smoother snapping
            snapToInterval={itemWidth} // Add this line to enable snapping
            snapToAlignment={'start'} // Define the alignment of the snapped items
            data={carouselData}
            keyExtractor={item => item.toString()}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
            renderItem={data => {
              return (
                <View
                  style={{
                    ...styles.itemContainer,
                    width: itemWidth,
                  }}>
                  <Image source={data.item.imageUrl} />
                  <Section title={data.item.title}>
                    {data.item.description}
                  </Section>
                </View>
              );
            }}
          />
        </View>
        <View>
          <ExpandingDot
            containerStyle={styles.dotContainerStyle}
            dotStyle={styles.dotStyle}
            data={carouselData}
            scrollX={scrollX}
            expandingDotWidth={30}
            inActiveDotColor={colors.white}
            activeDotColor={colors.white}
            inActiveDotOpacity={0.5}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Log In"
            onPress={() => {
              navigation.navigate('login');
            }}
            variant="secondary"
          />
        </View>
      </View>
    </LayoutPage>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  dotContainerStyle: {
    top: Dimensions.get('screen').height > 700 ? 30 : 10,
  },
  buttonContainer: {
    top: Dimensions.get('screen').height > 700 ? 80 : 30,
  },
});
