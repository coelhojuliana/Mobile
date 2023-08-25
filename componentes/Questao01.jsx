import {View, Text, Image} from 'react-native'
const Questao01 = () => {
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Image source="girafa.png" style={{width:300}} />
            <Text style={{
                fontSize:35,
                fontWeight: "bold" 
            }}>Ju Coelho</Text>
            <Text style={{
                fontSize:35, 
                fontWeight: "bold"
            }}>Canindé - Ceará</Text>
            <Text style={{
                fontSize:35, 
                fontWeight: "bold"
            }}>Design Digital - 6 semestre</Text>
        </View>
    )
}

export default Questao01