import React from 'react';
import { MdOutlineLibraryAdd } from 'react-icons/md';

const AdminBusInventory = () => {
	return (
		<section>
			<div>
				<h2 className='border-2 border-dark inline-block py-2 px-4 rounded-md hover:bg-dark text-dark font-semibold hover:text-white'>
					<span>
						<MdOutlineLibraryAdd className='inline mr-2 text-3xl' />
					</span>
					Add Bus
				</h2>
			</div>
		</section>
	);
};

export default AdminBusInventory;
