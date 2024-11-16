import { Stack } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Stack
        sx={{ mt: 2, width: '100%' }}// mt, mb, mr, ml para manejar el margen basado en rems
        spacing={1}//spaciado entre los hijos del contenedor
        direction={'column'}
        justifyContent='flex-start'
        alignItems={'start'}
      >
        <Stack direction={'row'} justifyContent={'flex-start'}>
          home
        </Stack>
        {/* <Box sx={{ background: 'blue', width: '100%' }}>
          <Grid container justifyContent='center' alignItems={'center'}>
            <Grid item xs={12} md={12} lg={12} >
              <Paper sx={{ mt: 1, mb: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12} ><Paper sx={{ mt: 1, mb: 1 }}>1</Paper></Grid>
            <Grid item xs={12} md={12} lg={12} ><Paper sx={{ mt: 1, mb: 1 }}>1</Paper></Grid>
          </Grid>
          1
        </Box> */}
        {/* <Box sx={{ background: 'pink', width: '100%' }}>2</Box> */}
      </Stack>
      {/* <Stack
        sx={{ mt: 2 }}// mt, mb, mr, ml para manejar el margen basado en rems
        spacing={1}//spaciado entre los hijos del contenedor
        direction={'row'}
        justifyContent='center'
        alignItems={'center'}
      >
        <Box sx={{ background: 'gray', width: '100%' }}>
          <Grid container justifyContent='center' alignItems={'center'}>
            <Grid item xs={12} md={12} lg={12} sx={{ background: '#20E383' }}>item 1</Grid>
            <Grid item xs={12} md={12} lg={12} sx={{ background: '#9BE320' }}>item 1</Grid>
            <Grid item xs={12} md={12} lg={12} sx={{ background: '#20E3C5' }}>item 1</Grid>
          </Grid>
        </Box>
        <Box sx={{ background: 'pink', width: '100%' }}>2</Box>
      </Stack> */}
    </div>
  )
}
export default Home;