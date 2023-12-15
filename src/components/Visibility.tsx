import { useContainer_generator_function} from '../functions/3x3comp';
import { Visibility_icon } from '../svg/panel svgs/visibility'
export const Visibility = ({data}: any) => {
    const visibility_icon_variable = <Visibility_icon />
    const visibility_container_variable = useContainer_generator_function('visibility', visibility_icon_variable , data?.visibility/1000, 'Km')
    return(
        <>{visibility_container_variable}</>
    )
}