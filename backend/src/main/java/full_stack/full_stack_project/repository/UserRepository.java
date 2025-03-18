package full_stack.full_stack_project.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import full_stack.full_stack_project.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
