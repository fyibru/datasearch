import React, { useEffect, useState } from 'react';

interface Data {
  bagianhutan: string;
  bkph: string;
  rph: string;
  lmdh: string;
  desa: string;
  kabupaten: string;
  anakpetak: any;
  luasbaku: any;
  jenistanaman: string;
  tahuntanam: number;
  nha: any;
  kelashutan: string;
  kdpk: any;
}

interface TableProps {
  data: Data[];
  filterText: string;
}

const TabelData: React.FC<TableProps> = ({ data: originalData, filterText }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [pageLimit] = useState(10);
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  // Set filteredData saat filterText atau originalData berubah
  useEffect(() => {
    // Simpan currentPage saat ini sebelum update filter
    const currentPageBeforeFilter = currentPage;

    if (!filterText.trim()) {
      setFilteredData(originalData);
    } else {
      const filtered = originalData.filter(
        (item) =>
          item.bkph.toLowerCase().includes(filterText.toLowerCase()) ||
          item.anakpetak.toString() === filterText.trim()
      );
      setFilteredData(filtered);
    }

    // Pastikan currentPage masih relevan setelah update filter
    if (currentPageBeforeFilter > Math.ceil(filteredData.length / itemsPerPage)) {
      setCurrentPage(Math.max(1, Math.ceil(filteredData.length / itemsPerPage)));
    }
  }, [filterText, originalData, currentPage, filteredData.length, itemsPerPage]);

  // Menghitung indeks awal dan akhir data untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Menghitung jumlah halaman berdasarkan jumlah data dan itemsPerPage
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Menghitung range pagination yang akan ditampilkan
  let startPage = Math.max(1, currentPage - Math.floor(pageLimit / 2));
  let endPage = Math.min(totalPages, startPage + pageLimit - 1);

  // Jika range pagination terlalu dekat dengan awal, maju ke belakang
  if (totalPages - endPage < Math.floor(pageLimit / 2)) {
    startPage = Math.max(1, endPage - pageLimit + 1);
  }

  // Fungsi untuk menghasilkan tombol-tombol pagination
  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`relative inline-flex items-center px-1 py-2 border-t-2 border-b-2 border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            currentPage === i ? 'bg-gray-500 text-white' : ''
          }`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className='flex flex-col text-center'>
      <div className='-m-1.5 overflow-x-auto'>
        <div className='p-1.5 inline-block align-middle'>
          <div className='border rounded-lg overflow-hidden bg-white'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-neutral-700'>
              <thead>
                <tr>
                  <th scope='col' className='px-8 py-5 text-center text-xs font-bold uppercase'>
                    Bagian Hutan
                  </th>
                  <th scope='col' className='px-8 py-3 text-center text-xs font-bold uppercase'>
                    BKPH
                  </th>
                  <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase'>
                    RPH
                  </th>
                  <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase'>
                    LMDH
                  </th>
                  <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase'>
                    DESA
                  </th>
                  <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase'>
                    KABUPATEN
                  </th>
                  <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase'>
                    ANAK PETAK
                  </th>
                  <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase'>
                    LUAS BAKU (Ha)
                  </th>
                  <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase'>
                    JENIS TANAMAN
                  </th>
                  <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase'>
                    TAHUN TANAM
                  </th>
                  <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase'>
                    N / Ha
                  </th>
                  <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase'>
                    KELAS HUTAN
                  </th>
                  <th scope='col' className='px-6 py-3 text-center text-xs font-bold uppercase'>
                    KHDPK
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index} className='text-gray-800'>
                    <td className='p-4 border-b border-gray-400 text-center'>{item.bagianhutan}</td>
                    <td className='border-b border-gray-400 text-center'>{item.bkph}</td>
                    <td className='border-b border-gray-400 text-center'>{item.rph}</td>
                    <td className='border-b border-gray-400 text-center'>{item.lmdh}</td>
                    <td className='border-b border-gray-400 text-center'>{item.desa}</td>
                    <td className='border-b border-gray-400 text-center'>{item.kabupaten}</td>
                    <td className='border-b border-gray-400 text-center'>{item.anakpetak}</td>
                    <td className='border-b border-gray-400 text-center'>{item.luasbaku}</td>
                    <td className='border-b border-gray-400 text-center'>{item.jenistanaman}</td>
                    <td className='border-b border-gray-400 text-center'>{item.tahuntanam}</td>
                    <td className='border-b border-gray-400 text-center'>{item.nha}</td>
                    <td className='border-b border-gray-400 text-center'>{item.kelashutan}</td>
                    <td className='border-b border-gray-400 text-center'>{item.kdpk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className='flex justify-center mt-4'>
        <nav className='inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 ${
              currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
            }`}
          >
            Previous
          </button>
          {renderPaginationButtons()}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
              currentPage === totalPages || totalPages === 0 ? 'cursor-not-allowed opacity-50' : ''
            }`}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TabelData;
