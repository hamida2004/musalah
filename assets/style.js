export const colors = {
  primary: '#062631',
  secondary: 'grey',
  white: '#F5FEFB',
  black: '#04030B'
}


export const styles ={
  container :{
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  }
, header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    marginVertical: 20
  },
  normal:{
    fontSize: 18,
    color: colors.black,
    textAlign: 'center'
  },
  image:{
    width: "100%",
    height: "100%",
  },
  input:{
    width: '80%',
    height: 40,
    margin: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: colors.primary,
    elevation: 4,
    backgroundColor: colors.white,
    borderRadius:2,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    
  },
  btn:{
    width: '80%',
    height: 40,
    marginVertical: 8,
    paddingVertical:4,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
}