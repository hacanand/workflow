import Connections from '@/app/(main)/(pages)/connections/page';
import { ConnectionProviderProps } from '@/providers/connections-provider';
import { z } from 'zod';
export const EditUserProfileSchema = z.object({
    email: z.string().email('Required'),
    name: z.string().min(1, 'Required'),
});
export type ConnectionTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord'

export type Connections = {
  title: ConnectionTypes;
  description: string;
  image: string;
  connectionKey: keyof ConnectionProviderProps;
  accessTokenKey?: string;
  alwaysTrue?: boolean;
  slackSpecial?: boolean;
};