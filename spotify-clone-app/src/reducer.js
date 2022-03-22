export const initialState = {
  user:null,
  playlists:[],
  playing:false,
  item:null,
  //Remove after finished developing.... 
  //token:'BQBIg6gkYJNblF4viyBglrMD_PDr5fwRrCVccDn01he1RjHk-5TvFOJv3EH8V4P0o6CWiHF-cEcm4HUTNmRp1j0to6vnjZhMpyu8_ZluQ611vpIKBqtCKRQqfvJugafkQp-hmmrwwXRRhowRs3xLd275F_o1KCBpDCAXw_Vp41JxHGvyRX6Ur9f8',
};

const reducer = (state , action) => {
  console.log(action);

  //action -> type, [payload]

  switch(action.type){
    case 'SET_USER': 
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN': return{
      ...state,
      token:action.token
    }
    case 'SET_PLAYLISTS': return{
      ...state,
      playlists: action.playlists,
    }
    case 'SET_DISCOVER_WEEKLY': 
    return{
      ...state,
      discover_weekly: action.discover_weekly,
    }
    default: 
      return state;
  }
}

export default reducer;