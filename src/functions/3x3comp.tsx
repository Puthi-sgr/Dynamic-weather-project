
export const useContainer_generator_function = (container_name:string, icon:React.ReactNode, data:string | number, measurement:string | number, ) => {  
        const container_name_checker: () => string[] | string= () => {
            const container_name_split = container_name.split('');
            let container_name_store: string = '';
            container_name_split.forEach((character:string, index: number) => {
                if(character == '-' || character == '_'){
                    container_name_store += ' ';
                }else{
                    const first_character = index == 0 && character.toLocaleUpperCase();
                    index == 0 ? container_name_store += first_character : container_name_store += character;
                }
            })
            return container_name_store;
        }
        const container =
            <div className={`${container_name}_container`} >
                <div className={`${container_name}_icon`} style={{width: '32px', marginLeft: '50%', transform: 'translateX(-50%)'}}>
                    {icon}
                </div>
                <div className={`${container_name}_data`} style={{fontFamily: 'Open Sans', textAlign: 'center', verticalAlign: 'center', padding: '0px 0 10px 0', fontSize: '13px'}} >
                    {data} {measurement}
                </div>
                <div className={`${container_name}_text`} style={{fontFamily: 'Open Sans', textAlign: 'center', verticalAlign: 'center', padding: '0px 0 0 0', fontWeight: 'bold', fontSize: '12px'}}>
                    {container_name_checker()}
                </div>
            </div>
        return container;
      
    }
   // export const [container_amount, setContainer_amount] = useState<String[]>([]);
