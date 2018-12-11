<?php
namespace App\Repositories\ServiceDetail;
 
interface ServiceDetailRepositoryInterface
{
    
    public function find($id);
    
    public function getAllServiceDetail();

    public function create($requestData);

    public function update($id, $requestData);

    public function destroy($id);

    // public function getChildCategoryByBrandId($brand_id);
}
