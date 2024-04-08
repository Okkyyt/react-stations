// @ts-check

export const DogImage = (/** @type {{ imageUrl: string | undefined; }} */ props) => {
  return (
    <img src={props.imageUrl} alt="「 犬の画像を表示するサイトです」" className='Dog-imag'></img>
  )
}

export default DogImage
