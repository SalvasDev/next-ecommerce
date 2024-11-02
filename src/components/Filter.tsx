import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between flex-wrap gap-6'>
      <div className='flex gap-6'>
        <select name='type' id='' className='py-2 px-4 rounded-full text-xs font-medium bg-[#EBEDED]'>
          <option>Type</option>
          <option value="Phisical">Phisical</option>
          <option value="Digital">Digital</option>
        </select>
        <input type="text" name='min' placeholder='min price' className='text-sx rounded-2xl pl-2 w-24 ring-1 ring-gray-400' />
        <input type="text" name='max' placeholder='max price' className='text-sx rounded-2xl pl-2 w-24 ring-1 ring-gray-400' />
        <select name='type' id='' className='py-2 px-4 rounded-full text-xs font-medium bg-[#EBEDED]'>
          <option>Size</option>
          <option value="Phisical">Phisical</option>
          <option value="Digital">Digital</option>
        </select>
        <select name='type' id='' className='py-2 px-4 rounded-full text-xs font-medium bg-[#EBEDED]'>
          <option>Color</option>
          <option value="Phisical">Phisical</option>
          <option value="Digital">Digital</option>
        </select>
        <select name='type' id='' className='py-2 px-4 rounded-full text-xs font-medium bg-[#EBEDED]'>
          <option>Category</option>
          <option value="Phisical">Phisical</option>
          <option value="Digital">Digital</option>
        </select>
        <select name='type' id='' className='py-2 px-4 rounded-full text-xs font-medium bg-[#EBEDED]'>
          <option>All Filters</option>
          <option value="Phisical">Phisical</option>
          <option value="Digital">Digital</option>
        </select>
      </div>
      <div className=''>
        <select name='type' id='' className='py-2 px-4 rounded-full text-xs font-medium bg-white ring-1 ring-gray-400'>
          <option>Sort By</option>
          <option value="">Price (low price)</option>
          <option value="">DPrice (ghigh price)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  )
}

export default Filter