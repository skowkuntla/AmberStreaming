import React, { useState } from 'react';
import { AzureMP } from 'react-azure-mp';
import Button from '@mui/material/Button';

const NowPlaying = () => {
  const [liveStream, setLiveStream] = useState(false);

  return (
    <div className="grid h-screen place-items-center">
      {!liveStream && (
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => setLiveStream(true)}
        >
          Start Live Streaming
        </Button>
      )}

      {liveStream && (
        <>
          <AzureMP
            options={{ controls: true, autoplay: true }}
            adaptRatio={[21, 9]}
            skin="amp-flush"
            src={[
              {
                src: 'https://sreetestmedia-euwe.streaming.media.azure.net/de1287b6-aa83-4332-b219-f4e35dca6fbb/output-20230617-153753-manifest.ism/manifest(format=m3u8-cmaf)',
                type: 'application/vnd.ms-sstr+xml',
              },
            ]}
          />
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => setLiveStream(false)}
          >
            Close player
          </Button>
        </>
      )}
    </div>
  );
};

export default NowPlaying;
