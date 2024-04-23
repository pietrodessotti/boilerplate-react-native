import { Text } from 'react-native'
import { ViewStyled } from './styled'
import { useTranslation } from 'react-i18next'

export const Header = (): JSX.Element => {
   const { t: translate } = useTranslation()

   return (
      <ViewStyled>
         <Text>{translate('TITLE')}</Text>
      </ViewStyled>
   )
}
