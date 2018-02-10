/* @flow */

import React, { Component, Fragment } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Divider, ProgressBar, Text, withTheme } from 'react-native-paper';

import type { ThemeType } from './theme';
import type { TrackType } from './api/types';

type Props = {
  theme: ThemeType,
  track: ?TrackType,
};

class Player extends Component<Props> {
  renderTrackPlaceHolder() {
    const { theme } = this.props;
    return (
      <View style={styles.trackPlaceHolder}>
        <Text
          style={[styles.placeHolderText, { fontFamily: theme.fonts.light }]}
        >
          No track selected
        </Text>
      </View>
    );
  }

  render() {
    const { theme, track } = this.props;
    return (
      <View style={styles.container}>
        <Divider style={{ backgroundColor: theme.colors.divider }} />
        <View style={styles.trackContainer}>
          {!track ? (
            this.renderTrackPlaceHolder()
          ) : (
            <Fragment>
              <Image
                source={{
                  uri: track.album.images[0].url,
                }}
                style={styles.albumCover}
              />
              <View style={styles.trackInfo}>
                <View>
                  <Text
                    numberOfLines={2}
                    style={[styles.title, { fontFamily: theme.fonts.light }]}
                  >
                    {track.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={[
                      styles.artist,
                      {
                        color: theme.colors.secondaryText,
                        fontFamily: theme.fonts.medium,
                      },
                    ]}
                  >
                    {track.artists[0].name.toUpperCase()}
                  </Text>
                </View>
                <ProgressBar style={styles.progressBar} progress={0.2} />
              </View>
            </Fragment>
          )}
        </View>
        <View
          style={[
            styles.playerContainer,
            { backgroundColor: theme.colors.primary },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 220,
  },
  trackContainer: {
    height: 140,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  albumCover: {
    height: 100,
    width: 100,
  },
  trackInfo: {
    flex: 1,
    height: 100,
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingVertical: 4,
  },
  title: {
    fontSize: 20,
    paddingBottom: 2,
  },
  artist: {
    fontSize: 14,
    paddingTop: 2,
    paddingBottom: 10,
  },
  playerContainer: {
    height: 80,
    backgroundColor: '#18D1A8',
  },
  progressBar: {
    paddingVertical: 0,
  },
  trackPlaceHolder: {
    flex: 1,
    alignItems: 'center',
  },
  placeHolderText: {
    fontSize: 18,
  },
});

export default withTheme(Player);
