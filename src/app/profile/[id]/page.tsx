export default function profileCompo({params}:any){
    return(
        <div>
    <div className="flex flex-col items-center justify-center">

        <h1 className="text-4xl">Profile compo</h1>
        <p>{params.id}  </p>
    </div>
</div>
    )
}