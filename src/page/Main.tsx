/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, View} from 'react-native';
import {LayoutPage} from '../component/LayoutPage';
import {colors} from '../utils/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {MainMenu} from '../component/Main/MainMenu';
import {InviteFriend} from '../component/Main/InviteFriend';
import {ProductContainer} from '../component/Main/ProductContainer';

export const Main = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'main'>) => {
  return (
    <LayoutPage
      statusBarStyle={{...styles.layout, barStyle: 'dark-content'}}
      enableSafeArea={false}>
      <View style={{backgroundColor: colors.white, height: '100%', gap: 32}}>
        <ScrollView style={{height: '100%', paddingBottom: 100}}>
          <Image
            source={require('../assets/image/main-header.png')}
            style={styles.image}
          />
          <View style={styles.container}>
            <View style={{gap: 16}}>
              <MainMenu />
              <InviteFriend onPress={() => console.log('pressed')} />
            </View>
            <View style={{gap: 16}}>
              <ProductContainer
                title="Produk Asuransi"
                description="Pilih produk asuransi yang di butuhkan"
                items={[
                  {
                    icon: require('../assets/image/car.png'),
                    label: 'Mobil',
                    onPress: () => console.log('pressed'),
                  },
                  {
                    icon: require('../assets/image/motorbike.png'),
                    label: 'Motor',
                    onPress: () => console.log('pressed'),
                  },
                  {
                    icon: require('../assets/image/truk.png'),
                    label: 'Truk',
                    onPress: () => console.log('pressed'),
                  },
                ]}
              />
              <ProductContainer
                title="Ruang Kerja"
                description="Cek status polis, klaim dan penarikan komisi"
                items={[
                  {
                    icon: require('../assets/image/selling.png'),
                    label: 'Penjualan',
                    onPress: () => console.log('pressed'),
                  },
                  {
                    icon: require('../assets/image/commision.png'),
                    label: 'Tarik Komisi',
                    onPress: () => console.log('pressed'),
                  },
                  {
                    icon: require('../assets/image/nasabah.png'),
                    label: 'Nasabah',
                    onPress: () => navigation.navigate('nasabah'),
                  },
                ]}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </LayoutPage>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: Platform.OS === 'android' ? colors.white : 'transparent',
  },
  image: {
    // height: Dimensions.get('screen').height > 700 ? '62%' : '55%',
    resizeMode: 'cover',
    width: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  logo: {
    width: 100,
    resizeMode: 'contain',
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    marginTop: 165,
    gap: 32,
  },
  highlight: {color: colors.orange.primary},
});
