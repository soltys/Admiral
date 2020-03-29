using System.ComponentModel.DataAnnotations;

public class PlayerToAuthenticateDTO {
    
    [Required]
    [MinLength(3, ErrorMessage="Player name is too short. Min is 3 letters.")]
    [MaxLength(16, ErrorMessage="Player name is too long. Max is 16 letters.")]
    public string Name { get; set; }
}