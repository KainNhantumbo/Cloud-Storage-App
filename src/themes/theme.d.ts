import {} from 'styled-components';
import { ThemeDefinition } from './themeTypes';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeDefinition {}
}
