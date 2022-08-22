import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appID = "a7fb2830a3a8478cb750e1bdb7b2d970";
const token = "007eJxTYOBQe8fz0ef6kqOzyjLLt7F/f9x/eMlPBZ8kx/2eifPSZSIUGBLN05KMLIwNEo0TLUzMLZKTzE0NUg2TUpLMk4xSLM0NWlsYk1mvMSU7rlzEwAiFID4LQ25iZh4DAwCAwiBe";


export const config = {mode: "rtc", codec: "vp8", appID: appID, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
