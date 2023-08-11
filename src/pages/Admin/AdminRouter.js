import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ALayout,Dashboard} from '@/pages/Admin'
import { User, UEdit,Add } from '@/pages/Admin/User';
import {Cockteil, CEdit} from '@/pages/Admin/Cocktail';
import Error from '@/_utils/Error';

const AdminRouter = () => {
    return (
        <div>
            <Routes>
                <Route element={<ALayout/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path='user'>
                        <Route path="index" element={<User/>}/>
                        <Route path="edit" element={<UEdit/>}/>
                        <Route path="add" element={<Add/>}/>
                    </Route>
                    <Route path="*" element={<Error/>}/>
                    <Route path='cocktail'>
                        <Route path="index" element={<User/>}/>
                        <Route path="edit" element={<CEdit/>}/>
                    </Route>
                </Route>   
            </Routes>
        </div>
    );
};

export default AdminRouter;