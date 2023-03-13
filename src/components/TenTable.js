function TenTable (){
    const onetoten = [1,2,3,4,5,6,7,8,9,10];
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        x
                    </th>
                    {onetoten.map((z)=>
                    <th>{z}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {onetoten.map((y)=>
                <tr>
                    <td>{y}</td>
                    {onetoten.map((x)=>
                    <td>{x*y}</td>
                    )}
                </tr>
                )}
                
            </tbody>
        </table>
    )
}

export default TenTable;