<?php
namespace App\Repositories\InventoryDetail;
 
interface InventoryDetailRepositoryInterface
{
    
    public function find($id);
    
    public function getAllInventoryDetail();

    public function create($requestData);

    public function update($id, $requestData);

    public function destroy($id);

    // public function getChildCategoryByBrandId($brand_id);
}
