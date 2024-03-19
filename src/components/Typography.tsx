
const H1 = (props:any) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        {props.children}
      </h1>
  )
}
const H3 = (props:any)=> {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  )
};
const H2 = (props:any) => {
  return (
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {props.children}
      </h2>
  )
}
const H4=(props:any)=> {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  )
}
const P = (props:any)=>{
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
        {props.children}
      </p>
  )
}
const Blockquote=(props:any)=> {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {props.children}
    </blockquote>
  )
}
const InlineCode=(props:any)=> {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {props.children}
    </code>
  )
}
const Lead=(props:any)=> {
  return (
    <p className="text-xl text-muted-foreground">
      {props.children}
    </p>
  )
}
const Large=(props:any)=> {
  return <div className="text-lg font-semibold">{props.children}</div>
}
const Small=(props:any)=> {
  return (
    <small className="text-sm font-medium leading-none">{props.children}</small>
  )
}
const Muted=(props:any)=> {
  return (
    <p className="text-sm text-muted-foreground">{props.children}</p>
  )
}
//list and table check from the website
export {H1,H2,H3,H4,P,Blockquote,InlineCode,Lead,Large,Small,Muted}
