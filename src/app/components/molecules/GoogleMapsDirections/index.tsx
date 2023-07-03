import { DirectionsService, GoogleMap } from '@react-google-maps/api';
import { memo, useCallback, useMemo, useState } from 'react';
import { DirectionsRendererWrapper } from './DirectionsRendererWrapper';

interface Props {
  origin: {
    lat: number;
    lng: number;
  };
  destination: {
    lat: number;
    lng: number;
  };
}

export const GoogleMapsDirections = memo(({ origin, destination }: Props) => {
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);

  const directionsRendererOptions: google.maps.DirectionsRendererOptions =
    useMemo(() => {
      return {
        directions: directionsResponse,
      };
    }, [directionsResponse]);

  const directionsResponseCallback = useCallback(
    (
      result: google.maps.DirectionsResult | null,
      status: google.maps.DirectionsStatus,
    ) => {
      if (result !== null) {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
        } else {
          console.error(
            `error fetching directionsResponse ${JSON.stringify(result)}`,
          );
        }
      }
    },
    [],
  );

  const directionsServiceRequestOptions =
    useMemo<google.maps.DirectionsRequest>(() => {
      return {
        destination,
        origin,
        travelMode: google.maps.TravelMode.DRIVING,
      };
    }, [origin, destination]);

  return (
    <GoogleMap
      id="google-map"
      mapContainerStyle={{
        borderRadius: '0.625rem',
        height: '100%',
        width: '100%',
      }}
      center={{
        lat: destination.lat,
        lng: destination.lng,
      }}
      zoom={10}
    >
      <DirectionsService
        options={directionsServiceRequestOptions}
        callback={directionsResponseCallback}
      />
      {directionsRendererOptions.directions && (
        <DirectionsRendererWrapper
          directionsRendererOptions={directionsRendererOptions}
        />
      )}
    </GoogleMap>
  );
});
