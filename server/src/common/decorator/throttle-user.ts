import { SetMetadata } from '@nestjs/common';
export const THROTTLE_USER_KEY = 'throttleUser';
export const ThrottleUser = () => SetMetadata(THROTTLE_USER_KEY, true);
