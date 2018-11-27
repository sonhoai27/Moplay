interface Logo {
  uri: string;
  name?: string;
}
export default ({uri, name}: Logo) => (
    <div className="w-1/5">
      <img src={uri} className="w-screen"/>
    </div>
  )