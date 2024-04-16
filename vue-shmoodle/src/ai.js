const getList = () => {
    try {
        const { data } = axios.get(
          'https://69cae0cd8c99a38b.mokky.dev/taps'
        )
        console.log(data);
        taps.value = data.map((obj) => obj.item)
      } catch (err) {
        console.log(err)
      }

}