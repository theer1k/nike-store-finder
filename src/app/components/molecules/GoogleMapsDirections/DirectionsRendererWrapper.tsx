import { DirectionsRenderer } from '@react-google-maps/api';
import { memo } from 'react';

interface Props {
  directionsRendererOptions: google.maps.DirectionsRendererOptions;
}

export const DirectionsRendererWrapper = memo(
  ({ directionsRendererOptions }: Props) => {
    return <DirectionsRenderer options={directionsRendererOptions} />;
  },
);
