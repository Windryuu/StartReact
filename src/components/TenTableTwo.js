function TenTableTwo (){
    const zerototen = [0,1,2,3,4,5,6,7,8,9,10];
    const ten = 10;
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        multiple 1
                    </th>
                    <th>
                        multiple 2
                    </th>
                    <th>
                        résultat
                    </th>
                </tr>
            </thead>
            <tbody>
                
                <td>
                    {zerototen.map((x)=>
                    <tr>{ten}</tr>
                    )}
                    
                    
                </td>
                <td>
                    {zerototen.map((x)=>
                    <tr>{x}</tr>
                    )}
                </td>
                <td>
                    {zerototen.map((x)=>
                    <tr>{x*ten}</tr>
                    )}
                </td>
            </tbody>
        </table>
    )
}

export default TenTableTwo;