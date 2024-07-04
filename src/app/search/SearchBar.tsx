import React from 'react'

const SearchBar = () => {

  return (
    <>
    <div className="h-52 text-center w-72 mx-52 mt-2 rounded-lg relative">
    <form>
      <input className="text-black border rounded-md mt-12 p-3" type="text" placeholder="Nama Data" ></input>
    </form>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded mt-2">Cari</button>
  </div>

    <div className='row'>
      <div className='offset-md-1 col-md-10'>
        <table className='table table-bordered border-primary table-hover mt-5 text-capitalize' id='mytable'>

        </table>
      </div>
    </div>
  </>
  )
}

export default SearchBar