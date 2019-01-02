<?php
namespace App\Repositories\Repertory;
 
interface RepertoryRepositoryInterface
{
    
    public function find($id);
    
    public function getAllRepertorys($requestData);

    public function create($requestData);

    public function update($id, $requestData);

    public function destroy($id);

}
